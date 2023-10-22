import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as documentDb from 'aws-cdk-lib/aws-docdb';
export class S3BucketDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'bucketMadeByCdk',{
      bucketName: 'thisisthebucketnamelol',
      versioned: true,
      publicReadAccess: true
    });


    const documentDB = new 
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3BucketDemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
