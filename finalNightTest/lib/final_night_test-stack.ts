import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as docdb from 'aws-cdk-lib/aws-docdb';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class FinalNightTestStack extends cdk.Stack {  // Capitalized 'cdk'
  constructor(scope: Construct, id: string, props?: cdk.StackProps) { // Capitalized 'cdk'
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'bucketMadeByCdkeduardo', {
      bucketName: 'thisisthebucketnamelol',
      versioned: true,
      publicReadAccess: true
    });

    // const vpc = new ec2.Vpc(this, 'vpcbyeduardoo', {   // Create a new VPC
    //   maxAzs: 3 // Replace with your desired configuration
    // });

    // const cluster = new docdb.DatabaseCluster(this, 'Databasebyeduardoo', {
    //   masterUser: {
    //     username: 'myuser',
    //     excludeCharacters: '\"@/:',
    //     secretName: '/myapp/mydocdb/masteruser',
    //   },
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.MEMORY5, ec2.InstanceSize.LARGE),
    //   vpc,
    // });

    // cluster.connections.allowDefaultPortFromAnyIpv4('Open to the world');

    const fn = new lambda.Function(this, 'MyFunctionbyeduardoo', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'helloWorld.handler',
      code: lambda.Code.fromAsset('./functions/'),
      functionName: 'thisisthenameofthefunctionbyeduardolol'
    });
  }
}
