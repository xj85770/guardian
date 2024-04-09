# 📖 Introduction to International Renewable Energy Credit Standard (iREC)

## **Policy Description**:

This policy supports the tokenization of Renewable Energy Certificates (RECs) in accordance with the I-REC Standard, and specifically, the I-REC(E) Product Code. The I-REC Standard is a non-profit organization that provides an attribute tracking standard that can be used around the world. While the I-REC Standard is designed to track attributes for a diversity of products, Product Codes provide additional requirements for specific products and markets. The I-REC(E) Product Code provides requirements for electricity products and was developed by Evident, who acts as Code Manager and Registry Operator. The schema and workflow of this policy were designed to reflect the MRV requirements, processes, and roles outlined by both I-REC Standard and the I-REC(E) Product Code.

## **Workflow Description**:

The workflow begins with the Registrant, generally the owner of an energy production facility or a party acting on their behalf, submitting an application to the Issuer for approval. Once approved, the Registrant submits a registration request to the Issuer for the facility/device that will be providing the MRV data. This will include both general information, as well as attributes (e.g., energy sources, location, etc.). Note that devices must be, and often are already, independently verified. Under certain circumstances, an inspection may be necessary. Once the Issuer processes and approves the facility/device registration, an issue request can be sent to the Issuer along with independently verified meter data. After the Issuer approves the issue request, I-REC(E) certificates are issued

<figure><img src="../../../.gitbook/assets/Screen Shot 2022-12-12 at 5.00.05 PM.png" alt=""><figcaption></figcaption></figure>

**IREC Schema and Policy Versions and their IPFS timestamps:**

| Versions                          | IPFS Timestamp       | Differences                                                                                                                                                                                                                                                                           |
| --------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iREC Schema                       | 1674826718.370918003 |                                                                                                                                                                                                                                                                                       |
| Inverter Schema                   | 1674826729.023904003 |                                                                                                                                                                                                                                                                                       |
| MRV Schema                        | 1674826707.124031003 |                                                                                                                                                                                                                                                                                       |
| iREC 1                            | 1707125172.156394003 | iRec policy with external MRV sender                                                                                                                                                                                                                                                  |
| iREC 2                            | 1707125414.999819805 | Implementation of iRec(E) without MRV sender                                                                                                                                                                                                                                          |
| iREC 3                            | 1707126011.005978889 | iRec 2 Policy + revoke actions (Added: Revoke Block, Button Block)                                                                                                                                                                                                                    |
| iREC 4                            | 1707126227.976010003 | iRec 3 Policy + auto associate and grant KYC token actions (Added: Token Action Block, Token Confirmation Block)                                                                                                                                                                      |
| iREC policy 5 group               | 1707126709.066208559 | Demonstrates the usage of the new concepts of common groups and multi-signature approvals. Document approval responsibilities are given to the new 'Approver' role, which belongs to a group. Users can become members of the group without the invite, and thereby become approvers. |
| IRec Policy 6 search documents    | 1707128237.926630472 | The ability to process other than input documents in calculation block (calculateMathVariables block improvement)                                                                                                                                                                     |
| IRec Policy 7 split documents     | 1707130249.448431277 | Splitting documents to chunks (added splitBlock)                                                                                                                                                                                                                                      |
| IRec Policy 8.1 MBP               | 1707130450.268901183 | Policy based on iREC Policy 4 where there are two impacts in one mint block                                                                                                                                                                                                           |
| IRec Policy 8.2 MBP               | 1707130781.567041003 | Policy based on iREC Policy 4 where the scenario is that there are two impacts in two different mint blocks                                                                                                                                                                           |
| IRec 9 Module                     | 1707132260.399505507 | Policy based on iREC Policy 4 where we have Modules integrated in the policy                                                                                                                                                                                                          |
| iRec 10 Source                    | 1707137229.117447820 | Policy based on iREC Policy 4 which breaks on creation of "Issue Request                                                                                                                                                                                                              |
| iRec 10 Recipient                 | 1707133931.238879003 | Policy based on iREC Policy 4 which continues with loading "Issue Request" from "iRec 10 Source"                                                                                                                                                                                      |
| iREC 10 Recipient New Trust Chain | 1707134204.675006033 | Policy based on iREC Policy 10 Recipient with new TrustChain view                                                                                                                                                                                                                     |