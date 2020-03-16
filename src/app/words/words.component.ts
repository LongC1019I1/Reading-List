import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  filterStatus = 'XEM_TAT_CA';
  newDesc = '';
  newBook = '';
  isShowForm = false;
  arrWords = [
    { id: 1, en: 'Elon Musk', vn: 'Elon Musk', memorized: true },
    { id: 2, en: 'Getting Thing Done', vn: 'Getting Thing Done', memorized: false },
    { id: 3, en: 'Lồng kính', vn: 'Lồng kính', memorized: true },
    { id: 4, en: 'Homodeus - Lược sử tương lai', vn: 'Homodeus - Lược sử tương lai', memorized: true },
  ];
  constructor() { }

  ngOnInit() {
  }
  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newDesc,
      vn: this.newBook,
      memorized: false
    });
    this.newDesc = '';
    this.newBook = '';
    this.isShowForm = false;
  }

  removeWord(id: number) {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_DA_DOC' && memorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_DOC' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }
}
