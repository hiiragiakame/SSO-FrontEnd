
# Params:
# $1: healthcheck endpoint to check
assert_healthcheck_endpoint() {
    RETURN_CODE=$(curl -Ls -o /dev/null -w %{http_code} $1)
    if ! [[ $RETURN_CODE =~ ^2[0-9]{2} ]]; then
        echo Error: endpoint $1 return $RETURN_CODE
        exit 1
    fi
}