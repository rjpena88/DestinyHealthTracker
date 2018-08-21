import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Pneumonia: right middle lobe X-Ray",
        "profilePic": "https://www.wikidoc.org/images/a/ad/Pneumonia-right-middle-lobe-4.jpg",
        "about": "Dr Sajoscha Sorrentino Airspace consolidation with air bronchograms in the right lower zone, clearly shown in the right middle lobe on the lateral projection. "
      },
      {
        "name": "Brain",
        "profilePic": "https://images.radiopaedia.org/images/239205/d2c418993c32843e100da0dae228c2_big_gallery.jpg",
        "about": "A.Prof Frank Gaillard Selected MRI images demonstrate abnormal white matter, particularly posteriorly and in the periventricular region. It is characterised by bilateral symmetric deep white matter hyperintensity on T2 weighted images, with associated involvement of the subcortical white matter, which results in poor grey-white matter differentiation on T2 weighted images. MRS demonstrates elevation of choline (Cho). Alpha-glutamate peak is not visible."
      },
      {
        "name": "Pap Smear",
        "profilePic": "https://laobgyns.com/wp-content/uploads/2016/09/los-angeles-pap-smear-495x400.jpg",
        "about": "Should be performed annually for women who are over the age of 18 and/or sexually active, to screen for cervical cancer and certain vaginal or uterine infections. Cells are removed from the cervical area for testing."
      },
      {
        "name": "Urinalysis",
        "profilePic": "http://www.carolinascoreconcepts.com/pedemmorsels/Ped_Emergency_Medicine_Morsels/2010/Entries/2010/9/17_U_A_vs_Dipstick_%28vs_culture%29_files/shapeimage_1.png",
        "about": "This standard test is usually performed on admission to a hospital or as part of an annual physical. It may also be done if you have symptoms relating to abdominal pain or blood in the urine. One to two ounces of urine are required."
      },
      {
        "name": "Urine Culture",
        "profilePic": "https://i.ytimg.com/vi/gH--8YWdyyk/maxresdefault.jpg",
        "about": "If you experience symptoms of a urinary tract infection (UTI), your doctor may test a sample of your urine to make the diagnosis. A urine sample is required."
      },
      {
        "name": "Uric Acid",
        "profilePic": "https://thumbs.dreamstime.com/t/blood-sample-abnormal-high-uric-acid-test-result-116099624.jpg",
        "about": "Used to detect high levels of uric acid, or to monitor certain chemotherapy or radiation cancer therapies."
      },
      {
        "name": "Glucose Level",
        "profilePic": "https://www.mymed.com/image/2383/medicalarticle/800",
        "about": "Used to identify blood glucose level, and to screen for, diagnose, and monitor diabetes, pre-diabetes, and hypoglycemia. If you are diabetic, glucose levels should be monitored up to several times a day."
      },
      {
        "name": "PTT (Partial Thromboplastin Time)",
        "profilePic": "https://media.istockphoto.com/photos/partial-thromboplastin-time-test-picture-id951994872",
        "about": "This test is most often ordered to help evaluate your risk of excessive bleeding prior to a surgical procedure, or to monitor heparin anticoagulant therapy."
      },
      {
        "name": "Glycohemoglobin (Hemoglobin A1C)",
        "profilePic": "https://bmjopen.bmj.com/content/bmjopen/6/4/e011059/F2.large.jpg",
        "about": "Used to monitor a person’s diabetes and to aid in treatment decisions, this test is usually performed with the first diagnosis and then 2 to 4 times per year"
      },
      {
        "name": "BMP (Basic Metabolic Panel) test results sample",
        "profilePic": "http://study.com/cimages/videopreview/chemical-blood-tests-basic-metabolic-panel-terminology1_211791.jpg",
        "about": "A group of 7-8 tests used as a screening tool to check for conditions like diabetes and kidney disease. You may be asked to fast for 10 to 12 hours prior to test."
      },
      {
        "name": "CBC (Complete Blood Count)",
        "profilePic": "https://www.mymed.com/image/2383/medicalarticle/800",
        "about": "Determines general health and screens for disorders such as anemia or infections, as well as nutritional status and toxic substance exposure."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
