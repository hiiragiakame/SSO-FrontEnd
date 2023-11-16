#!/bin/bash
CICD_DIR=$(readlink -f ${BASH_SOURCE[0]/%.cicd*/.cicd})

# shellcheck source=/dev/null
source "$CICD_DIR/utils.sh"

source $CICD_DIR/config/config.sh

if [[ "$@" != "" ]]; then
    _FILTER_STR="($(echo $@ | sed -E 's/ /|/')):.*$"
else
    _FILTER_STR=""
fi

SERVICE_LIST=$(docker image ls --format "{{.Repository}}:{{.Tag}}" --filter=reference="${SERVICE_NAME}" | grep -E "$_FILTER_STR")

if [[ $SERVICE_LIST == "" ]]; then 
    echo "Service to build not specified. Default to building everything"
    SERVICE_LIST=$(docker image ls --format "{{.Repository}}:{{.Tag}}" --filter=reference="${SERVICE_NAME}")
fi

for _service_name in $SERVICE_LIST
do
    docker tag $_service_name $(change_docker_registry_prefix $REGISTRY $_service_name)
    docker image push $(change_docker_registry_prefix $REGISTRY $_service_name)
done
# | tee >(docker tag $1 change_docker_registry_prefix $REGISTRY $1) \
# | sed -E "s|^([^/]+/)?((.+)/(([^/]+):([^/]+)))\$|${REGISTRY//./\\.}/\3/\5:\6|g" \
# | xargs -L 1 docker image push
