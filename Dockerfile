FROM 10.60.156.72/buildutils/node:14 as build-stage
WORKDIR /source
COPY ./ .
RUN npm ci && npm run build


FROM 10.60.156.72/baseutils/nginx as package-stage
 
# Copy site
COPY --from=build-stage /source/build /usr/share/nginx/html

# Set env
COPY .package/set-env.sh /usr/share/nginx/html

CMD ["sh", "-c", "cd /usr/share/nginx/html/ && sh ./set-env.sh && nginx -g 'daemon off;'"]
