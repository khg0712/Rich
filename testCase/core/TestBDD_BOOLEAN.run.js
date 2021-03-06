Rich.init(
    "../asset/cssPage.css",
    "../checkState.js"
).then(function () {
    describe('Test - BOOLEAN', function () {
        describe('Test - 허용범위 테스트', function () {
            [true, false].forEach(function (targetVAlue) {
                it('입력값 : ' + targetVAlue, function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(target.prototype, 'keyName_test', Rich.defineProperty.BOOLEAN)
                    var targetInstance = new target();
                    targetInstance.keyName_test = targetVAlue;
                    expect(targetInstance.keyName_test === targetVAlue).to.be.true;
                });
            });
        });
        describe('Test - 허용범위 외 테스트', function () {
            [NaN, null, undefined, -1, 0, 1, '문자열', {}, function () {
            }].forEach(function (v) {
                it('입력값 : ' + v, function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(target.prototype, 'keyName_test', Rich.defineProperty.BOOLEAN)
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
                it('초기값 옵션이 없을경우 false로 생성되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(target.prototype, 'keyName_test', Rich.defineProperty.BOOLEAN)
                    var targetInstance = new target();
                    expect(targetInstance.keyName_test === false).to.be.true;
                });
                it('{ value : true } 초기값이 잘 지정되는지', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.BOOLEAN,
                        {
                            value: true
                        }
                    )
                    var targetInstance = new target();
                    expect(targetInstance.keyName_test === true).to.be.true;
                });
            });

            describe('Test - option.nullishAble 테스트', function () {
                it('{   nullishAble : true } : nullishAble 상태일때 초기값이 null로 세팅되나 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.BOOLEAN,
                        {
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == null).to.be.true;
                });
                it('{ value : true, nullishAble : true } : nullishAble 상태일때 초기값이 세팅이 옵션대로 되는지 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.BOOLEAN,
                        {
                            value: true,
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    console.log(targetInstance)
                    expect(targetInstance.keyName_test == true).to.be.true;
                });
                it('{ value : true, nullishAble : true } : nullishAble 실제 값을 set 했을때 허용되는지 체크', function () {
                    var target = function Test() {
                    }
                    Rich.defineProperty(
                        target.prototype,
                        'keyName_test',
                        Rich.defineProperty.BOOLEAN,
                        {
                            value: true,
                            nullishAble: true
                        }
                    )
                    var targetInstance = new target();
                    targetInstance.keyName_test = null
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
                        Rich.defineProperty.BOOLEAN,
                        {
                            callback: function () {
                                result = true
                            }
                        }
                    )
                    var targetInstance = new target();
                    targetInstance.keyName_test = true
                    console.log(targetInstance)
                    expect(result).to.be.true;
                })
            });
        });


    });
    checkState();
});
