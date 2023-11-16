#!/bin/sh

CICD_DIR=${BASH_SOURCE[0]/%.cicd*/.cicd}

## Source all util file to load all util funtions
for util_file in "$CICD_DIR"/utils.sh.d/*.sh; do
    # shellcheck source=/dev/null
    . "$util_file"
done


# load_config() {
#     CONFIG_NAME=$1

#     # First check if environment variable is set
#     ENVVAR_CONFIG_VALUE=$(eval 'echo $'"$CONFIG_NAME")
#     if [ -n "$ENVVAR_CONFIG_VALUE" ] 
#     then
#         echo "$ENVVAR_CONFIG_VALUE"
#         return 0
#     fi

#     # If envvar is not set, check in conf files
#     ## Source all conf file to load the configs
#     for conf_file in "$SCRIPT_DIR"/config/*.conf; do
#         # shellcheck source=/dev/null
#         . "$conf_file"
#     done

#     ## Now the config has been source to this shell's environment
#     ## We read and print the variable
#     FILE_CONFIG_VALUE=$(eval 'echo $'"$CONFIG_NAME")
#     if [ -n "$FILE_CONFIG_VALUE" ] 
#     then
#         echo "$FILE_CONFIG_VALUE"
#         return 0
#     fi

#     # Return empty string if no such config is found
#     echo ''
# }