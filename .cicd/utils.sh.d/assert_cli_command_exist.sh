
# Params:
# $1: cli command to check
assert_cli_command_exist() {

    COMMAND=$1
    if ! $(which $COMMAND 1>/dev/null 2>&1); then
        echo "$COMMAND is not available in \$PATH, host $(hostname). Please check your $COMMAND installation."
        exit 1
    fi
}