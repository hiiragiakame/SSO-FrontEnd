
# shellcheck disable=SC2148

# Return true if there are modified files
git_has_modified_files() {
    git update-index -q --refresh
    if [ -n "$(git diff-index --name-only HEAD --)" ]; then
        return 0
    else
        return 1
    fi
}
