
function to_uppercase() {
    str=$1
    lower=$(echo "$str" | awk '{print tolower($0)}')
    echo $lower
}