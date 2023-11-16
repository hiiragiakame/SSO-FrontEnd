#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

# Exit script immediately if a command exits with a non-zero status
set -e

source "$CICD_DIR"/utils.sh

BACKUP_DIR="$CICD_DIR/__k8s-backup"

kubectl apply --recursive -f $BACKUP_DIR