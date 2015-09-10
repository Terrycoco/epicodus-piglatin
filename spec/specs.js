// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
// });

describe('piglatin', function () {
  it('returns word appended with ay if starts with a vowel', function () {
    expect(piglatin("author")).to.equal("authoray");
  });

  it('returns consonant on end with ay if starts with single consonant', function() {
    expect(piglatin("terry")).to.equal("errytay");
  });

  it('returns double consonant on end with ay if double consonant', function() {
    expect(piglatin("this")).to.equal("isthay");
  });

  it('returns for three consonants', function() {
    expect(piglatin('thrice')).to.equal('icethray');
  });

  it('returns for qu exception', function() {
    expect(piglatin('quality')).to.equal('alityquay');
  });

  it('treats y as a consonant', function(){
    expect(piglatin('yellow')).to.equal('ellowyay');
  });
});
