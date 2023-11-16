#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

# Exit script immediately if a command exits with a non-zero status
set -e

source $CICD_DIR/config/config.sh

# Check for dependent command
# if ! $(which newman 1>/dev/null 2>&1); then
#     echo "newman is not available in \$PATH. Please check your newman installation."
#     exit 1
# fi

# newman run $CICD_DIR/smoketest/prod-posvnm-api-smoketest.postman_collection.json