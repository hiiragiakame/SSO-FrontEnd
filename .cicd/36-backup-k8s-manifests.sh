#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

source "$CICD_DIR"/utils.sh

NAMESPACE=$1
BACKUP_DIR="$CICD_DIR/__k8s-backup"

if [[ $NAMESPACE == "" ]]; then
    echo "Error: Namespace not specified."
    exit 1
fi

assert_cli_command_exist kubectl
assert_cli_command_exist kustomize
assert_cli_command_exist yq

for name in $(kubectl get -o=name pvc,configmap,serviceaccount,secret,ingress,service,deployment,statefulset,hpa,pdb,job,cronjob -n $1) 
do
    # Moi chi xet truong hop cho deployment
    # Can chia switch case de prune file yaml cho phu hop voi tung loai manifests
    # Tạm thời prune all theo các key như ở dưới
    # Còn thiếu case: Service  .spec.ClusterIP , .spec.ClusterIPs
    mkdir -p $BACKUP_DIR/$(dirname $name)
    kubectl get $name -o yaml -n $1 \
    | yq 'del(.metadata.annotations."deployment.kubernetes.io/revision")' \
    | yq 'del(.metadata.creationTimestamp)' \
    | yq 'del(.metadata.generation)' \
    | yq 'del(.metadata.resourceVersion)' \
    | yq 'del(.metadata.uid)' \
    | yq 'del(.spec.progressDeadlineSeconds)' \
    | yq 'del(.spec.revisionHistoryLimit)' \
    | yq 'del(.spec.template.metadata.creationTimestamp)' \
    | yq 'del(.status)' \
    | cat > $BACKUP_DIR/$name.yaml 
done
