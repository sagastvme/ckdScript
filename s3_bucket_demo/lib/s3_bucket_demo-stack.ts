import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as docdb from 'aws-cdk-lib/aws-docdb';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
export class S3BucketDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'bucketMadeByCdk',{
      bucketName: 'thisisthebucketnamelol',
      versioned: true,
      publicReadAccess: true
    });
    const vpc = new ec2.Vpc(this, 'MyVPC', {   // Create a new VPC
      maxAzs: 3 // Replace with your desired configuration
    });
    const cluster = new docdb.DatabaseCluster(this, 'Database', {
      masterUser: {
        username: 'myuser',
        excludeCharacters: '\"@/:',
        secretName: '/myapp/mydocdb/masteruser',
      },
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.MEMORY5, ec2.InstanceSize.LARGE),
      vpc,
    });
    
    cluster.connections.allowDefaultPortFromAnyIpv4('Open to the world');


  }
}
