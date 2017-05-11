import { Component } from '@angular/core';
import { Book } from './book';
@Component({
    selector: 'my-app',
    template: `
        <div class="container">

            <div class="row" id="branding">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading text-center">
                            <img id="angular-logo" class="img-fluid" src="angular.png" alt="AngularJS Logo" />
                        </div>
                    </div>
                </div>
            <!-- row -->
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            
                            <table class="table table-hover text-left">
                                <thead>
                                    <tr>
                                        <th *ngFor="let column of columns">{{ column }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let book of books">
                                        <td>{{ book.isbn }}</td>
                                        <td>{{ book.title }}</td>
                                        <td>{{ book.author }}</td>
                                        <td>{{ book.published | date:'MMM d, yyyy' }}</td>
                                        <td>{{ book.publisher }}</td>
                                        <td>{{ book.pages }}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            <!-- row -->
            </div>

        <!-- container -->
        </div>
`

})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

export class AppComponent {
  columns = [ 'ISBN', 'Title', 'Author', 'Published', 'Publisher', 'Pages' ];
  books = [
    new Book(
        '9781593275846',
        'Eloquent JavaScript, Second Edition',
        'A Modern Introduction to Programming',
        'Marijn Haverbeke',
        new Date('2014-12-14T00:00:00.000Z'.split('.')[0]),
        'No Starch Press',
        472,
        'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        'http://eloquentjavascript.net/'
    ),
    new Book(
        '9781449331818',
        'Learning JavaScript Design Patterns',
        'A JavaScript and jQuery Developer\'s Guide',
        'Addy Osmani',
        new Date('2012-08-30T00:00:00.000Z'.split('.')[0]),
        'O\'Reilly Media',
        254,
        'With Learning JavaScript Design Patterns, you\'ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.',
        'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/'
    ),
    new Book(
        '9781449365035',
        'Speaking JavaScript',
        'An In-Depth Guide for Programmers',
        'Axel Rauschmayer',
        new Date('2014-03-24T00:00:00.000Z'.split('.')[0]),
        'O\'Reilly Media',
        460,
        'Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
        'http://speakingjs.com/'
    ),
    new Book(
        '9781593277574',
        'Understanding ECMAScript 6',
        'The Definitive Guide for JavaScript Developers',
        'Nicholas C. Zakas',
        new Date('2016-09-03T00:00:00.000Z'.split('.')[0]),
        'No Starch Press',
        352,
        'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
        'https://leanpub.com/understandinges6/read'
    ),
    new Book(
        '9781449325862',
        'Git Pocket Guide',
        'A Working Introduction',
        'Richard E. Silverman',
        new Date('2013-08-02T00:00:00.000Z'.split('.')[0]),
        'O\'Reilly Media',
        234,
        'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.',
        'http://chimera.labs.oreilly.com/books/1230000000561/index.html'
    ),
    new Book(
        '9781449337711',
        'Designing Evolvable Web APIs with ASP.NET',
        'Harnessing the Power of the Web',
        'Glenn Block, et al.',
        new Date('2014-04-07T00:00:00.000Z'.split('.')[0]),
        'O\'Reilly Media',
        538,
        'Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.'
        'http://chimera.labs.oreilly.com/books/1234000001708/index.html'
    ),
  ];
}