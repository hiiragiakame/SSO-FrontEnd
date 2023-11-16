
# shellcheck disable=SC2148

# Check if current directory is a git root directory
assert_git_branch_in() {
    ALLOWED_GIT_BRANCHES=$@
    CURRENT_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    # Check if current directory is a git root directory
    if [[ ! "$ALLOWED_GIT_BRANCHES" == *"$CURRENT_GIT_BRANCH"* ]]
    then 
        echo "Error: Current operation is not allowed to run in current git branch: $CURRENT_GIT_BRANCH"    
        exit 1
    fi
}