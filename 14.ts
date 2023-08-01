function solution14(a: number[]): number[] {
    let team1 = 0;
    let team2 = 0;
  
    for (let i = 0; i < a.length; i += 2) {
      team1 += a[i];
    }
  
    for (let i = 1; i < a.length; i += 2) {
      team2 += a[i];
    }
  
    return [team1, team2];
  }
  