import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wikitudePlugin: any;
  requiredFeatures = [ "2d_tracking", "geo" ];

  constructor(public platform: Platform) {
     platform.ready().then(() => {
      this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");

      console.log('The wikitude object: ', this.wikitudePlugin);
      console.log('The wikitude test method: ',this.wikitudePlugin.isDeviceSupported);

      this.wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, this.requiredFeatures);
    });
  }

  onDeviceSupported () {
    console.log('device supported');
  }

  onDeviceNotSupported () {
    console.log('device not supported');
  }
}
