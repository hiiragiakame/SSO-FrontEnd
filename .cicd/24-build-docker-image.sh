#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

# shellcheck source=/dev/null
. "$CICD_DIR/utils.sh"

source $CICD_DIR/config/config.sh
echo $SERVICE_NAME
# ========== Default globals ==========

declare _FORCE=false

# ========== Parse options ==========

PARSED_ARGUMENTS=$(getopt -n build-docker-image -a -o f --long force -- "$@") || return
VALID_ARGUMENTS=$?
if [ "$VALID_ARGUMENTS" != "0" ]; then
  pass
fi
eval "set -- $PARSED_ARGUMENTS"

while true; do
  case $1 in
    -f|--force) _FORCE=true ; shift ;;
    --) shift; break ;;
    *) echo "Unexpected option: $1" ;;
  esac
done


# # Check if there are no modified files
if git_has_modified_files ; then
  if [[ $_FORCE == true ]]; then
    echo "--force enabled"
    echo "Including uncommitted changes in build. Build will be marked as dirty. Proceed at your own risk."
  else
    COMMIT_HASH=$(git_current_commit_shorthash)
    echo "Error: project's files has been changed compared to commit $COMMIT_HASH"
    echo "Aborting build process ..."
    exit 1
  fi
fi

# Check if there are unstaged files
# assert_no_unstaged_files

DOCKER_BUILDKIT=0 docker build --progress plain -t "${SERVICE_NAME}:${VERSION:-invalid-tag}" .



