const fs = require('fs');
const AWS = require('aws-sdk');
const BUCKET_NAME = 'awsjoobucket';
const s3 = new AWS.S3({accessKeyId: '#',
secretAccessKey:'#'});

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: BUCKET_NAME,
    Key: 'member_backup.tar.gz',
    Body: fileContent
  };
  s3.upload(params, function(err, data) {
    if (err) {throw err;}
    console.log('File uploaded succssfully. ${data.Location}');
  });
};
uploadFile('member_backup.tar.gz');