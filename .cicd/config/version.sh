#!/bin/bash

CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

source $CICD_DIR/utils.sh

# TODO parse tag and get latest version if tag exist
# otherwise, use git commit hash
VERSION=$(git_current_commit_shorthash)
if git_has_modified_files || git_has_unstaged_files ; then
    VERSION="$VERSION-dirty"
fi
export VERSION