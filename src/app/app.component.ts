import { Component } from '@angular/core';
import * as UaParser from 'ua-parser-js';

interface Device { 
  model: String,
  vendor: String, 
  type: String
}

interface OS {
  name: String,
  version: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  device: Device;
  os: OS;
  ngOnInit(){
    const parser = new UaParser();
    const parsed = parser.getResult();
    console.log(parsed);
    
    this.device = {
      model: parsed.device.model === undefined ? (parsed.browser.name === 'Chrome') ? 'Desktop' : '' : parsed.device.model,
      vendor: parsed.device.vendor === undefined ? (parsed.browser.name === 'Chrome') ? 'Desktop': '' : parsed.device.vendor,
      type: parsed.device.type === undefined ? (parsed.browser.name === 'Chrome') ? 'Desktop': '' : parsed.device.type
    }

    this.os = {
      name: parsed.os.name,
      version: parsed.os.version
    }
  }

  reload(){
    location.reload();
  }
}
