const _lookup = Mustache.Context.prototype.lookup;

export function lookup (name) {
    const value = _lookup.bind(this)(name);

    if (value === undefined) {
        return `_{${name}=??}_{.missing-param}`;
    }

    return value;
}

export function dateFormat () {
  return (text, render) => {
    const dateString = render(text);
    let date;

    try {
      date = new Date(dateString);
      if (Number.isNaN(date.getTime())) {
        throw new Error('Invalid Date');
      }
    }
    catch (error) {
      return dateString;
    }

    const dateOptions = {
      timeZone: 'Europe/Paris',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return new Intl.DateTimeFormat('fr', dateOptions).format(date);
  }
}
