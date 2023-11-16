
# shellcheck disable=SC2148

# Check if there are no modified file
assert_no_modified_files() {
    git update-index -q --refresh
    if [ -n "$(git diff-index --name-only HEAD --)" ]
    then
        echo "Error: There are modified files:"
        # List all changes, except untracked files
        git status --porcelain=v1 --untracked-files=no
        return 1
    fi
}
