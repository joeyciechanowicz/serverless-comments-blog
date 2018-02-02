zip -r getLambdaFunc.zip .
aws lambda update-function-code --function-name getComments --zip-file ./getLambdaFunc.zip
