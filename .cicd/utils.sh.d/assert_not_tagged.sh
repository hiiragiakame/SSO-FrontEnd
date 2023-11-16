
# shellcheck disable=SC2148

# Check if current commit has a tag pointed to it
assert_not_tagged() {
    if [ -n "$(git describe --match "v[0-9]*" HEAD 2>/dev/null)" ]
    then
        echo "Error: Commit has already been tagged"
        exit 1
    fi
}
