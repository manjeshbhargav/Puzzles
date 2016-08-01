const Class = (ctor, methods, base) => {
  if (typeof(base) === 'function') {
    ctor.prototype = Object.create(base.prototype);
    ctor.prototype.constructor = ctor;
  }
  Object.keys(methods).forEach(name => {
    ctor.prototype[name] = methods[name];
  });

  return ctor;
};

const Person = Class(
  function (first, last) {
    this.firstName = first;
    this.lastName = last;
  },
  {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
);

const Employee = Class(
  function (first, last, title, company) {
    Person.apply(this, [ first, last ]);
    this.title = title;
    this.company = company;
  },
  {
    fullTitle: function () {
      return this.title + ' @ ' + this.company;
    }
  },
  Person
);

var person = new Person('Manjesh', 'Malavalli');
var employee = new Employee('Akhilesh', 'Malavalli', 'Sr. Software Engineer', 'Apigee Systems');

console.log(person.fullName());
console.log(employee.fullName() + ', ' + employee.fullTitle());