#!/bin/sh

#$1: Prefix - docker registry
#$2: Image name

function change_docker_registry_prefix() {
    _REGISTRY=$1
    _IMAGE_NAME=$2

    _RES=$(echo $_IMAGE_NAME | sed -E "s|^([^/]+/)?((.+)/(([^/]+):([^/]+)))\$|${REGISTRY//./\\.}/\3/\5:\6|g" )

    echo $_RES
}