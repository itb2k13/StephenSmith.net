import { Component, OnInit } from '@angular/core';
import { Project, Feature, Media } from '../models/project';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  data: Project;

  constructor() {
    this.data = new Project();
  }

  ngOnInit(): void {
    this.data.title = 'pfSFV';
    this.data.subtitle = 'How does pfSFV work?';
    this.data.description = 'pfSFV uses file and CRC information contained within a .SFV file which is usually packaged with a download. The .SFV file contains information about which files should be in the directory and also an eight digit hexadecimal number called the checksum. By reading the .SFV and recalculating the checksum for each file it is possible to determine that a) all the files are there b) each file is error-free.';
    this.data.features = [];
    this.data.media = [];
    this.data.media[0] = new Media();
    this.data.media[0].url = 'http://pfsfv.co.uk/pfsfv/images/screenshots/infofolders.PNG';

    var o = new Feature();
    o.title = 'What does it do?';
    o.image = new Media();
    o.image.url = 'http://pfsfv.co.uk/pfsfv/images/screenshots/infofolders.PNG';
    o.featureset = [
      'Multi-threaded multi-folder monitoring with capability to pause, resume or halt',
      'Ability to scan individual .SFVs (as per other leading brands)',
      'Ability to scan and monitor non-MP3 releases and stamp respectively',
      'Integrated searching on leading Music search engines',
      'Info-folder stamping including artist,genre,album,year,bitrate,sample rate,bad/missing/good file count',
      'Multiple Disk-space-free directory stamping',
      'Stamps can be created as directories or as 0KB files',
      'NFO/file dropping',
      'Genre catalogue (creates a directory of shortcuts organised by genre)',
      'Release group catalogue (creates a directory of shortcuts organised by release group)',
      'Custom colours',
      'Sits quietly in system tray',
      'Optional task bar notifications (as per MSN Messenger)',
      'Email reports to yourself (possibly could be used to SMS to mobile phone)'];

    this.data.features[0] = o;
  }

}
