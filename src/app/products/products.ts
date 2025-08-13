import {Component} from '@angular/core';
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
  productName_1: string = 'Unknown Hair'
  hairProduct_2: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6787_gzcj9r.png'
  productName_2: string = 'Unknown Hair'
  hairProduct_3: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6593_jb8giy.png'
  productName_3: string = 'Unknown Hair'
  hairProduct_4: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6564_b8xtow.png'
  productName_4: string = 'Unknown Hair'
  hairProduct_5: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6581_dgbutw.png'
  productName_5: string = 'Unknown Hair'
  hairProduct_6: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6580_diqyxp.png'
  productName_6: string = 'Unknown Hair'
  hairProduct_7: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6563_oksyog.png'
  productName_7: string = 'Unknown Hair'
  hairProduct_8: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6553_flooi6.png'
  productName_8: string = 'Unknown Hair'
  hairProduct_9: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6466_kx7rus.png'
  productName_9: string = 'Unknown hair'
  hairProduct_10: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6467_kjlo2n.png'
  productName_10: string = 'Unknown Hair'
  hairProduct_11: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6543_engczt.png'
  productName_11: string = 'Unknown Hair'
  hairProduct_12: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6458_wfvfbw.png'
  productName_12: string = 'Unknown Hair'
  hairProduct_13: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6378_fd86eg.png'
  productName_13: string = 'Unknown Hair'
  hairProduct_14: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6313_ut52cv.png'
  productName_14: string = 'Unknown Hair'
  hairProduct_15: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6091_mvxn6g.png'
  productName_15: string = 'Unknown Hair'
  hairProduct_16: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6457_drelxl.png'
  productName_16: string = 'Unknown Hair'
  hairProduct_17: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6095_lty4mk.png'
  productName_17: string = 'Unknown Hair'
  hairProduct_18: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5964_fiujui.png'
  productName_18: string = 'Unknown Hair'
  hairProduct_19: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5953_klj7pi.png'
  productName_19: string = 'Unknown Hair'
  hairProduct_20: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6310_avhyab.png'
  productName_20: string = 'Unknown Hair'
  hairProduct_21: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5953_klj7pi.png'
  productName_21: string = 'Unknown Hair'
  hairProduct_22: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6258_xhmcs9.png'
  productName_22: string = 'Unknown Hair'
  hairProduct_23: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5963_mx6rpj.png'
  productName_23: string = 'Unknown Hair'
  hairProduct_24: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5647_iogxse.png'
  productName_24: string = 'Unknown Hair'
  hairProduct_25: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5938_rya6xy.png'
  productName_26: string = 'Unknown Hair'
  hairProduct_26: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6180_tslcsl.png'
  productName_27: string = 'Unknown Hair'
  hairProduct_27: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_6154_d5c0ig.png'
  productName_28: string = 'Unknown Hair'
  hairProduct_28: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5646_mpobvh.png'
  productName_29: string = 'Unknown Hair'
  hairProduct_29: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5640_tbrx8i.png'
  hairProduct_30: string = 'https://res.cloudinary.com/zone0/image/upload/IMG_5645_zjtwn6.png'
  productName_30: string = 'Unknown Hair'


  // <load more button for more items
  loadMore: boolean = false;

  loadMoreItems() {
    this.loadMore = true;
  }

  lessItems() {
    this.loadMore = false;
  }
}
