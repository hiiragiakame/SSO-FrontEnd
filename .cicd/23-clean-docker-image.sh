#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})
source $CICD_DIR/config/config.sh

REMOVE_LIST=$(docker image ls --filter=reference="${SERVICE_NAME}" --format "{{.ID}}")
if [[ $REMOVE_LIST == "" ]]; then 
    exit 0;
fi

docker image rm --force $REMOVE_LIST