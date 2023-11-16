
# shellcheck disable=SC2148

assert_not_detached_head() {
    # git symbolic-ref -q <name> return non-zero if <name> is a detached HEAD
    if ! git symbolic-ref -q HEAD 1>/dev/null
    then
        echo "Error: git is in detached HEAD mode"
        exit 1
    fi
}
