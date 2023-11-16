
# shellcheck disable=SC2148

# Check if current directory is a git root directory
assert_git_root_directory() {
    # Check if current directory is a git root directory
    if [ ! -d "${PWD}/".git ]
    then 
        echo "Error: Your current working directory $(pwd) is not a git repo"    
        exit 1
    fi
}
