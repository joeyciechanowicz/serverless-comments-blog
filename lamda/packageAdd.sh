zip -r lambdaFunc.zip .
aws lambda update-function-code --function-name getComments --zip-file fileb://${pwd}/lambdaFunc.zip
