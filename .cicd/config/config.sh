#!/bin/bash

CICD_DIR=${BASH_SOURCE[0]/%.cicd*/.cicd}

source $CICD_DIR/config/cicd-environment.sh
source $CICD_DIR/config/version.sh
export SERVICE_NAME="daikin-payg/frontend"

case $CICD_ENVIRONMENT in 
    SANDBOX|sandbox)
        CICD_ENVIRONMENT='SANDBOX'
        REGISTRY='10.60.156.72'
        KUBECONFIG_PATH=$CICD_DIR/config/sandbox.kubeconfig.yaml

    ;;
    DEV|dev)
        CICD_ENVIRONMENT='DEV'
        REGISTRY='10.60.156.72'
        KUBECONFIG_PATH=$CICD_DIR/config/dev.kubeconfig.yaml
        VUE_APP_BASE_URL="10.60.158.230:9781/api/v1"
    ;;

    STAGING|staging)
        CICD_ENVIRONMENT='STAGING'
        REGISTRY='10.254.144.152'
        KUBECONFIG_PATH=$CICD_DIR/config/staging.kubeconfig.yaml
        VUE_APP_BASE_URL="10.240.192.157:0000/api/v1"
    ;;

    PRODUCTION|PROD|production|prod)
        CICD_ENVIRONMENT='PRODUCTION'
        REGISTRY='10.254.144.152'
        KUBECONFIG_PATH=$CICD_DIR/config/prod.kubeconfig.yaml
        VUE_APP_BASE_URL="!!!FIXME!!!"

    ;;
    *) 
        echo "CICD environment not given" 
        exit 1
    ;;
esac

export CICD_ENVIRONMENT
export REGISTRY
export KUBECONFIG_PATH
