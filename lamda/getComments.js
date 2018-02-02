process.env[‘PATH’] = process.env[‘PATH’] + ‘:’ + process.env[‘LAMBDA_TASK_ROOT’]

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
const npdynamodb = require("./npdynamodb");

const npd = npdynamodb.createClient(dynamodb);

exports.handler = function (event, ctx, callback) {
  if (!event.postTitle) {
    callback('No post title provided', null);
    return;
  }

  npd()
    .table('commentz')
    .where("post-title", event.postTitle)
    .first()
    .then(data => callback(null, data.Item.comments))
    .catch(error => callback(error));
}
