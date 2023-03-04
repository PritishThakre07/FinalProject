import React,{useRef} from "react";
import { useReactToPrint } from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';

const ReactPdfPrint = ()=>
{
    const dt = new Date();

    const componentRef = useRef();

     const currentLoanDetails={
        "currentloanId": 0,
        "currentloanNo": 0,
        "loanAmount": 800000,
        "rateOfInterest": 7.5,
        "tenure": 120,
        "totalAmounttobepaidDouble": 1139536.98370419,
        "processingFees": 4000,
        "totalInterest": 339536.98370419,
        "sanctionDate":  dt,
        "remark": "NOT USED",
        "status": "NOT USED",
        
        "emidetails": {
          "emiID": 0,
          "emiAmountMonthly": 9496.14153086825,
          "nextEmiDueDate": "NOT USED",
          "previousEmiStatus": "NOT USED"
        }
      }
      //height: window.innerHeight

      const sactionLatterData = {
        "sanctionId": 0,
        "sanctionDate": "CURRENT DATE",
        "applicantName": "Pritish Thakare",
        "contactDetails": 7276483409,
        "producthomeEquity": "NOT USED",
        "loanAmtSanctioned": 0,
        "interestType": "string",
        "rateOfInterest": 0,
        "loanTenure": 0,
        "monthlyEmiAmount": 0,
        "modeOfPayment": "string",
        "remarks": "string",
        "termsCondition": "string",
        "status": "string"
      }



    const handlerPrint = useReactToPrint(
        {
            content: ()=> componentRef.current,
            documentTitle:'sactionLatter.pdf',
            onAfterPrint:()=> alert("Print Successfully")
        }
    )
    return (
        <div style={{fontFamily:"Verdana" }}>
           <div ref={ componentRef } style={{width:'110%'}}>
        <h3 style={{textAlign:'center',wordSpacing:'15px',color:'slateblue'}}>ETHICAL HOME LOAN</h3>
            <h2 style={{textDecorationLine:'underline',textAlign:'center',color:'paleturquoise'}}>SANCTION LATTER</h2>
            <Table className="w-75 mx-auto" bordered>
                <thead style={{fontFamily:"Verdana"}}>

                    <h4 style={{textDecorationLine:'underline'}}>Cutomer Details :</h4>
                    <pre/>
                     <h4 style={{textTransform:'uppercase'}}>{sactionLatterData.applicantName}</h4>
                    <p>Pune<br/>pritishthakre@gmail.com<br/>{sactionLatterData.contactDetails}
                    <br/>
                     Dear {sactionLatterData.applicantName}<br/>Thank you for choosing Ethcal Home Loan. Based on Application and Information provided there in , We are pleased to extend and offer to you for a loan as per the priminary terms and
                       coditions mensioned below :</p>
                    <tr>
                    <td>Loan Type</td><td>Home Loan</td>
                    </tr>
                    <tr>
                    <td>Loan Amount Sanctioned</td><td>{currentLoanDetails.loanAmount}</td>
                    </tr>
                    <tr>
                    <td>Interest Rate</td><td>{currentLoanDetails.rateOfInterest}</td>
                    </tr>
                    <tr>
                    <td>Loan Tenure (In Month)</td><td>{currentLoanDetails.tenure}</td>
                    </tr>
                    <tr>
                    <td>Total Ammount</td><td>{currentLoanDetails.totalAmounttobepaidDouble}</td>
                    </tr>
                    <tr>
                    <td>Total Interest</td><td>{currentLoanDetails.totalInterest}</td>
                    </tr>
                    <tr>
                    <td>Ammount Of EMI (INR)</td><td>{currentLoanDetails.emidetails.emiAmountMonthly}</td>
                    </tr>
                    <tr>
                    <td>Sanction Date</td><td>{dt.toLocaleDateString()}</td>
                    </tr>
                    <tr>
                    <td>Sanction Letter Validity</td><td>30 Days From The Date Of Sanction</td>
                    </tr>
                    <tr>
                    <td>Property Address</td><td>Pune</td>
                    </tr>
                </thead>
            </Table>
            <h4 style={{textDecorationLine:'underline',marginLeft:'12%'}}>Conformation:</h4>
            <pre/>
            <p style={{direction:"rtl",marginRight:'17%',fontWeight:'bold',fontStyle:'italic'}}>Signiture</p>
            <pre/>
            <h4 style={{textDecorationLine:'underline',marginLeft:'12%'}}>Terms and Conditions</h4>
            <ul style={{marginLeft:'12%',marginRight:'12%'}}>
                <li>vA penal interest @ 2% over and above the normal rate of interest is chargeable on the overdue
                    amount of installment(s) and/or interest.
                </li>
                <li>The loan sanctioned will be released to the suppliers of the Assets (Equipment/Machinery)
                    along with 10% margin money remitted by the group.
                </li>
                <li>The Assets (Equipment/Machinery) purchased should be hypothecated, jointly in the names of
                    the Bank and Government in respect of the loan availed.
                </li>
                <li>The Assets (Equipment/Machinery) purchased should be hypothecated, jointly in the names of
                    the Bank and Government in respect of the loan availed.
                </li>
                <li>For release of the Loan, the following documents need to be submitted:</li>
                <li>Acceptance of the terms and conditions by signing on the copy of this sanction letter.</li>
                <li>Demand Promissory Note for the sanctioned limit.</li>
                <li>Loan Agreement.</li>
                <li>Deed of Hypothecation of the Assets purchased.</li>
                <li>Lodging of Original invoices.</li>
                <li>2nd Set of keys of Machinery to be lodged with the Bank</li>
                <li>If the Borrowers fail to pay the instalment amount together with interest due, within 30 days
                    from the due date, the Bank shall have the right for seizure of Equipment/Machinery from the
                    Borrower, in addition to demanding payment of the entire Loan Amount outstanding. Further,
                    after three (3) months of the due date of the 1st Instalment which is not repaid, the Bank in
                    consultation with the Department Officers, shall take steps for sale of the Assets (Equipment/
                    Machinery) in order to recover the loan amount, besides taking legal action, for recovery of
                    entire loan amount outstanding.
                </li>
                <li>The Loan will not be allowed for foreclosure and release of hypothecation of Assets, within 3
                    years from the release of loan.
                </li>
                <li>The Bank reserves the right to appropriate the collections first to charges if any, penal interest,
                    interest, and then to the principal.
                </li>
                <br/>
                <div style={{color:'darkslateblue',fontWeight:'bold'}}>
                    SANCTION LATTER : Issued By Pritish & Mayur Team Under Guidance Gauri Mam at Ethical Home Loan Project On {dt.toLocaleDateString()}
                </div>
            </ul>
           </div>
           <footer style={{textAlign:'center'}}>
           <Button onClick={handlerPrint}> Generate Pdf </Button>
           </footer>
           
        </div>  

    );
}
export default ReactPdfPrint;