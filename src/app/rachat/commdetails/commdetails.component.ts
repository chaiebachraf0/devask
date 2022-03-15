import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { commandeclService } from 'src/app/services/comc.service';
import { ProductService } from 'src/app/services/product.service';
declare var export_pdf:any;
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-commdetails',
  templateUrl: './commdetails.component.html',
  styleUrls: ['./commdetails.component.css']
})
export class CommdetailsComponent implements OnInit {
  facture: any;
  id: any;
  Net:any=0;
  rows:any=[]
  data:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private cmdService: commandeclService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getcommc();

  }
  exports(){
    export_pdf();
  }
  export()
  {
   this.data = document.getElementById('contnetpdf');
  html2canvas(this.data).then(canvas => {
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const widthRatio = pageWidth / canvas.width;
  const heightRatio = pageHeight / canvas.height;
  const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
  const canvasWidth = canvas.width * ratio;
  const canvasHeight = canvas.height * ratio;
  const marginX = (pageWidth - canvasWidth) / 2;
  const marginY = (pageHeight - canvasHeight) / 2;
  pdf.addImage(contentDataURL, 'PNG', marginX, marginY, canvasWidth, canvasHeight)
  pdf.save('new-file.pdf');
  });
  }
  getcommc(){
    this.cmdService.getcommclByIdf(this.id).subscribe(res=>{
    this.facture=res;
    this.rows=this.facture[0]

    })
  }
  annuler(){
    this.router.navigate(['rachat/achat/commf']);
   }
}
