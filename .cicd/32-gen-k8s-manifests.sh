#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

source "$CICD_DIR"/config/config.sh
# get version envvar defined in .cicd/config/projects.sh
# source "$CICD_DIR"/config/projects.sh
source "$CICD_DIR"/utils.sh

assert_cli_command_exist kustomize

KUSTOMIZE_DIR="$CICD_DIR/../.k8s"

(cd "$KUSTOMIZE_DIR"/base/ && kustomize edit set image frontend=$REGISTRY/${SERVICE_NAME}:$VERSION)