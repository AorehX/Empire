import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';



@Component({
  selector: 'app-products',
  imports: [NgOptimizedImage],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})

export class Products {
  // the header section images
  banner: string = "https://res.cloudinary.com/zone0/image/upload/banner_ja2sk9.jpg"
  image_banner: string = "https://res.cloudinary.com/zone0/image/upload/bob-wig-with-bangs-1-400x380.jpg_yev5xw.webp"
  image_1: string = "https://res.cloudinary.com/zone0/image/upload/bundles-with-closure-400x180.jpg_xrsdas.webp"
  image_2: string = "https://res.cloudinary.com/zone0/image/upload/short-bob-wigs_2-400x180.jpg_zwvguz.webp"
  image_3: string = "https://res.cloudinary.com/zone0/image/upload/hair-bundles_2-400x180.jpg_el0mt2.webp"
  image_4: string = "https://res.cloudinary.com/zone0/image/upload/closure_frontal-400x180.jpg_rnvbvz.webp"
  imageTruck: string = "https://res.cloudinary.com/zone0/image/upload/truck-line_wf1djw.png"

  //<Hair products sections
  // section 1
  hairProduct_1: string = "https://res.cloudinary.com/zone0/image/upload/IMG_6580_shku6o.jpg"
  hairProduct_2:string = "https://res.cloudinary.com/zone0/image/upload/IMG_5963_ainahe.jpg"
  productName_1: string = 'SDD Bone straight'

  moreImages: boolean = false;
  hideBtn(){
    this.moreImages = false;
  }
  showBtn(){
    this.moreImages = true;
  }

  // section 2
  hairProduct_2_a: string = "https://res.cloudinary.com/zone0/image/upload/IMG_6467_xtyalr.jpg"
  hairProduct_2_aa:string = "https://res.cloudinary.com/zone0/image/upload/IMG_6378_zrejgb.jpg"
  productName_2_a: string = 'SDD Bone straight'

  moreImages_2: boolean = false;
  hideBtn_2(){
    this.moreImages = false;
  }
  showBtn_2(){
    this.moreImages = true;
  }

  // <load more button for more items
  loadMore:boolean = false;
  loadMoreItems() {
    this.loadMore = true;
  }


}
