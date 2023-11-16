#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

source "$CICD_DIR"/config/config.sh

echo Using kubeconfig file: $KUBECONFIG_PATH

cd $CICD_DIR/../.k8s/overlays/staging
kustomize build . \
| kubectl apply --kubeconfig $KUBECONFIG_PATH \
-f -

# Wait for deployment rollout to complete
kubectl --kubeconfig $KUBECONFIG_PATH \
wait --all pod --for condition=Ready=True