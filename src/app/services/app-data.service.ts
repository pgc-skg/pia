import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppDataService {

  private dataNav = { sections: null };

  constructor(private http: Http) {
    this.loadArchitecture();
  }

  /**
   * Get the PIA tool whole navigation structure
   */
  async getDataNav() {
    if (!this.dataNav.sections) {
      await this.loadArchitecture();
    }
    return this.dataNav;
  }

  /**
   * Load the adequate file which describes the PIA tool general structure
   */
  private async loadArchitecture() {
    return new Promise((resolve, reject) => {
      this.http.get('./assets/files/pia_architecture.json').map(res => res.json()).subscribe(data => {
        this.dataNav = data;
        resolve();
      });
    });
  }
}
