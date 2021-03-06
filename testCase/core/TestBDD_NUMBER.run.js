Rich.init(
    "../asset/cssPage.css",
    "../checkState.js"
).then(function () {

    describe('Test - Number', function () {
        describe('Test - 허용범위 테스트', function () {
            [-1.1, -1, 0, 1, 1.1].forEach(function (v) {
                it('입력값 : ' + v, function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(target.prototype, 'keyName_test', Rich.defineProperty.NUMBER)
                    var targetInstance = new target();
                    targetInstance.keyName_test = v;
                    expect(targetInstance.keyName_test === v).to.be.true;
                });
            });
        });
        describe('Test - 허용범위 외 테스트', function () {
            [NaN, null, undefined, true, false, '문자열', {}, function () {
            }].forEach(function (v) {
                it('입력값 : ' + v, function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(target.prototype, 'keyName_test', Rich.defineProperty.NUMBER)
                    console.log(target)
                    var targetInstance = new target();
                    var result = true;
                    try {
                        targetInstance.keyName_test = v;
                    } catch (e) {
                        result = false;
                    }
                    expect(result).to.be.false;
                });
            });
        });
        describe('Test - option 테스트', function () {
            describe('Test - option.value 테스트', function () {
                it('초기값 옵션이 없을경우 0으로 생성되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(target.prototype, 'keyName_test', Rich.defineProperty.NUMBER)
                    var targetInstance = new target();
                    expect(targetInstance.keyName_test === 0).to.be.true;
                });
                it('{ value : 1 } 초기값이 잘 지정되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            value: -1
                        }
                    )
                    var targetInstance = new target();
                    expect(targetInstance.keyName_test === -1).to.be.true;
                });
            });
            describe('Test - option.min 테스트', function () {
                it('{ value : -10, min : -1 } : 초기값이 최소값 보다 작을때 최소값으로 치환되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            value: -10,
                            min: -1
                        }
                    )

                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == -1).to.be.true;
                });
                it('{  min : -1 } : 입력값이 최소값 보다 작을때 최소값으로 치환되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            min: -1
                        }
                    )

                    var targetInstance = new target();
                    console.log(targetInstance)
                    targetInstance.keyName_test = -2;
                    expect(targetInstance.keyName_test == -1).to.be.true;
                });
            });
            describe('Test - option.max 테스트', function () {
                it('{ value : 10, max : 5 } : 초기값이 최대값보다 클때 최대값으로 치환되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            value: 10,
                            max: 5
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == 5).to.be.true;
                });
                it('{  max : 5 } : 입력값이 최대값보다 클때 최대값으로 치환되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            max: 5
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    targetInstance.keyName_test = 10
                    expect(targetInstance.keyName_test == 5).to.be.true;
                });
            });
            describe('Test - option.nullishAble 테스트', function () {
                it('{   nullishAble : true } : nullishAble 상태일때 초기값이 null로 세팅되나 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == null).to.be.true;
                });
                it('{ value : 5, nullishAble : true } : nullishAble 상태일때 초기값이 세팅이 옵션되로 되는지 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            value: 5,
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == 5).to.be.true;
                });
                it('{ value : 5, nullishAble : true } : nullishAble 실제 값을 set 했을때 허용되는지 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            value: 5,
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    targetInstance.keyName_test = null
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == null).to.be.true;
                });
                it('{ min : 5, nullishAble : true } : nullishAble 일떄 nullish입력시 기본값이 min, max를 무시하는지 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            value: null,
                            min: 5,
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == null).to.be.true;
                });
            });
            describe('Test - option.allowList 테스트', function () {
                it('TODO - allowList', function () {

                })
            });
            describe('Test - option.callback 테스트', function () {
                it('콜백테스트', function () {
                    var result = false
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.NUMBER,
                        {
                            callback: function () {
                                result = true
                            }
                        }
                    )
                    var targetInstance = new target();
                    targetInstance.keyName_test = 1
                    console.log(targetInstance)
                    expect(result).to.be.true;
                })
            });
        });


    });
    checkState();
});