
# shellcheck disable=SC2148

assert_no_unstaged_files() {
    if [ -n "$(git ls-files --other --exclude-standard)" ]
    then
        echo "Warning: There are unstaged files:"
        git ls-files --other --exclude-standard
        echo

        printf "Continue ? (y/N): "
        read -r answer
        if [ "$answer" != "${answer#[Yy]}" ] ;then # this grammar (the #[] operator) means that the variable $answer where any Y or y in 1st position will be dropped if they exist.
            : # do nothing
        else
            echo Aborted
            exit 1
        fi

    fi
}
