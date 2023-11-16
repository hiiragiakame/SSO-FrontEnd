
# shellcheck disable=SC2148

git_current_commit_shorthash() {
    # Print HEAD's short hash
    SHORT_HASH=$(git rev-parse --short HEAD)
    echo "$SHORT_HASH"
}
