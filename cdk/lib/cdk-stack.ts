import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, BucketAccessControl } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";

export class FinaplyFincancingFormStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "FinaplyFinancingFormBucket", {
      accessControl: BucketAccessControl.PUBLIC_READ,
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
    });

    new BucketDeployment(this, "FinaplyFinancingFormBucketDeployment", {
      destinationBucket: bucket,
      sources: [Source.asset(path.resolve(__dirname, "../../dist"))],
    });
  }
}
