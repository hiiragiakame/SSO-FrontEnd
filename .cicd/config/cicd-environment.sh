
# Specify branch-to-environment mapping
SANDBOX_BRANCHES=(sandbox)
DEV_BRANCHES=(dev)
STAGING_BRANCHES=(staging)
PRODUCTION_BRANCHES=(master)

# If CICD_ENVIRONMENT is already set then ignore it
if [[ $CICD_ENVIRONMENT != "" ]] && [[ $CICD_ENVIRONMENT =~ ^(sandbox|dev|staging|production)$ ]]; then
    return
fi

CURRENT_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "|${SANDBOX_BRANCHES[*]}|" =~ "|${CURRENT_GIT_BRANCH}|" ]]; then
    export CICD_ENVIRONMENT=sandbox
    return
fi

if [[ "|${DEV_BRANCHES[*]}|" =~ "|${CURRENT_GIT_BRANCH}|" ]]; then
    export CICD_ENVIRONMENT=dev
    return
fi

if [[ "|${STAGING_BRANCHES[*]}|" =~ "|${CURRENT_GIT_BRANCH}|" ]]; then
    export CICD_ENVIRONMENT=staging
    return
fi

if [[ "|${PRODUCTION_BRANCHES[*]}|" =~ "|${CURRENT_GIT_BRANCH}|" ]]; then
    export CICD_ENVIRONMENT=production
    return
fi

# If branch is not in mapping, then map to default env
export CICD_ENVIRONMENT=dev