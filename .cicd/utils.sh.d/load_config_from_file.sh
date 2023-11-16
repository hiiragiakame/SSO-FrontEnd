
# shellcheck disable=SC2148

# load_config_from_file() {
#     CONFIG_NAME=$1
#     CONFIG_FILE=$2

#     # Source config from specified file
#     # shellcheck source=/dev/null
#     . "$CONFIG_FILE"

#     ## Now the config has been source to this shell's environment
#     ## We read and print the variable
#     FILE_CONFIG_VALUE=$(eval 'echo $'"$CONFIG_NAME")
#     if [ -n "$FILE_CONFIG_VALUE" ] 
#     then
#         echo "$FILE_CONFIG_VALUE"
#         return 0
#     fi
# }
