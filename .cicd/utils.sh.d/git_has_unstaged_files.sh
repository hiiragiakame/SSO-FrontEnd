
# shellcheck disable=SC2148

# Return true if there are unstaged git files
git_has_unstaged_files() {
    if [ -n "$(git ls-files --other --exclude-standard)" ]
    then
        return 0
    else
        return 1
    fi
}
