import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { devisService } from 'src/app/services/devis.service';
declare var export_pdf:any;
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-devisdetails',
  templateUrl: './devisdetails.component.html',
  styleUrls: ['./devisdetails.component.css']
})
export class DevisdetailsComponent implements OnInit {
  facture: any;
  id: any;
  Net:any=0;
  rows:any=[]
  data:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private devisService:devisService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getdevis();
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
  getdevis(){
    this.devisService.getdevisById(this.id).subscribe(res=>{
      this.facture=res;
      this.rows=this.facture[0]
    })
  }
  annuler(){
    this.router.navigate(['rvente/vente/Devis']);
  }
}
